# Job Agent Project Requirements

Job Agent is an AI-powered job search and CV tailoring application. Explain important technical decisions in plain English for a beginner.

## Master CV model

- Maintain one Master CV for each user. The user must not need to upload a CV for every job.
- The user uploads their Master CV once, and the application securely stores it with access restricted to the appropriate user.
- Extract and structure the candidate's experience from the Master CV. Extraction must preserve the facts in the source and must not infer missing experience.
- Compare every job opportunity against the Master CV and any additional candidate information that has been explicitly confirmed and is permitted for that application.
- Never modify or overwrite the Master CV when tailoring for a job.
- Create a separate tailored CV associated with the specific job/application.
- Allow the user to replace or update their Master CV whenever they choose.
- Preserve previous tailored CVs and their associations with their respective applications when the Master CV changes.

## Candidate knowledge

- If an important job requirement is missing or unclear in the Master CV and reusable candidate-confirmed career profile information, ask the candidate whether they actually have that experience.
- If the candidate confirms additional legitimate experience, allow them to choose:
  - "Use for this application only"
  - "Save to my career profile"
- Information confirmed for one application may be used only for that application. It must not automatically be saved to the career profile or reused for other applications.
- Candidate-confirmed information saved to the career profile may be reused for future CV tailoring.
- Never assume missing experience.
- Never fabricate candidate information.
- Never convert a gap into experience simply because the job description requires it.

## Source of truth

- The candidate's reusable career information consists only of:
  1. The Master CV.
  2. Candidate-confirmed career profile information.
- Application-specific confirmed information is an explicitly scoped supplement for that application only, not reusable career profile information.
- Each tailored CV is an output, not a new source of truth.
- A claim that appears only in an AI-generated tailored CV must never automatically become verified candidate experience or be reused as evidence in future tailoring.
- Preserve the source and confirmation scope of candidate claims so generated output cannot be mistaken for verified experience.

## Current development scope

At this stage, incorporate requirements into AGENTS.md only. Do not initialize Next.js, install packages, run project generators, or create other files unless the user authorizes a later development step.
