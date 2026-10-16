import json
import re
from pathlib import Path

source = Path.home() / "uppcs-test1.txt"
output = Path("data/uppcs_test1_questions_raw.json")

lines = source.read_text(encoding="utf-8").splitlines()

# Start only after the booklet instructions.
marker = next(
    (i for i, line in enumerate(lines)
     if "DO NOT OPEN THIS TEST BOOKLET" in line),
    None
)

if marker is None:
    raise SystemExit("ERROR: Booklet start marker not found.")

lines = lines[marker + 1:]
starts = []

for i, line in enumerate(lines):
    match = re.match(r"^\s{0,12}(\d{1,3})\.\s{2,}[A-Z]", line)
    if match:
        number = int(match.group(1))
        if 1 <= number <= 150:
            starts.append((i, number))

numbers = [number for _, number in starts]

if len(starts) != 150 or sorted(set(numbers)) != list(range(1, 151)):
    print("Detected entries:", len(starts))
    print("Missing:", sorted(set(range(1, 151)) - set(numbers)))
    print("Duplicates:", sorted(n for n in set(numbers) if numbers.count(n) > 1))
    raise SystemExit("Extraction check failed; raw JSON not overwritten.")

questions = []

for index, (start, number) in enumerate(starts):
    end = starts[index + 1][0] if index + 1 < len(starts) else len(lines)
    block = lines[start:end]

    # Keep the English column; Hindi is printed alongside it.
    english_lines = []
    for line in block:
        left = line[:60].rstrip()
        if left.strip():
            english_lines.append(left.strip())

    if english_lines:
        english_lines[0] = re.sub(
            rf"^{number}\.\s*", "", english_lines[0]
        )

    raw_text = "\n".join(english_lines)
    option_lines = [
        line for line in english_lines
        if re.match(r"^\([a-dA-D]\)\s*", line)
    ]

    questions.append({
        "id": number,
        "rawText": raw_text,
        "detectedOptions": option_lines
    })

output.write_text(
    json.dumps(questions, ensure_ascii=False, indent=2),
    encoding="utf-8"
)

print("Questions extracted:", len(questions))
print("Question IDs correct:", [q["id"] for q in questions] == list(range(1, 151)))
print("\n--- QUESTION 1 ---")
print(json.dumps(questions[0], ensure_ascii=False, indent=2))
print("\n--- QUESTION 2 ---")
print(json.dumps(questions[1], ensure_ascii=False, indent=2))
print("\nQuestions with 4 detected option lines:",
      sum(len(q["detectedOptions"]) == 4 for q in questions))
print("First 20 questions needing option review:",
      [q["id"] for q in questions if len(q["detectedOptions"]) != 4][:20])
