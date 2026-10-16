import json
import re
from pathlib import Path

source = Path.home() / "uppcs-test1.txt"
output = Path("data/uppcs_test1_questions_raw.json")

with source.open(encoding="utf-8") as f:
    lines = f.readlines()

# Find the beginning of each English question.
starts = []
for i, line in enumerate(lines):
    match = re.match(r"^\s{0,12}(\d{1,3})\.\s{2,}[A-Z]", line)
    if match:
        number = int(match.group(1))
        if 1 <= number <= 150:
            starts.append((i, number))

questions = []

for index, (start, number) in enumerate(starts):
    end = starts[index + 1][0] if index + 1 < len(starts) else len(lines)
    block = lines[start:end]

    # Keep the left-hand English column; the PDF also prints Hindi on the right.
    english_lines = []
    for line in block:
        left = line[:115].rstrip()
        if left.strip():
            english_lines.append(left.strip())

    # Remove the question number from the first line.
    if english_lines:
        english_lines[0] = re.sub(
            rf"^{number}\.\s*", "", english_lines[0]
        )

    raw_text = "\n".join(english_lines)

    # Detect answer choices for inspection; keep raw text as the source of truth.
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
print("Output:", output)
print("\n--- QUESTION 1 ---")
print(json.dumps(questions[0], ensure_ascii=False, indent=2))
print("\n--- QUESTION 2 ---")
print(json.dumps(questions[1], ensure_ascii=False, indent=2))
print("\n--- OPTION DETECTION SUMMARY ---")
print("Questions with 4 detected option lines:",
      sum(len(q["detectedOptions"]) == 4 for q in questions))
print("Questions needing option review:",
      [q["id"] for q in questions if len(q["detectedOptions"]) != 4][:30])
