# OmniRoute Audit — Farooque Portfolio

Date: 2026-10-10 (Asia/Karachi)

## Audit scope

Read-only inspection of OmniRoute installation, configured providers, available project models, routing combinations, health, quota visibility, usage, and compression. No configuration was changed and no inference test was run.

## Installation and health

- OmniRoute CLI version: `3.8.51`
- Service status: healthy
- Configured provider connections: 1
- Active provider connections: 1
- Codex account pools: 1 total, 1 available
- Configuration validation: valid, with no provider issues or validation warnings

## Configured providers

Only one provider is configured:

- Provider: `codex`
- Authentication: OAuth
- Status: active
- Last recorded test: successful

No Anthropic, Google/Gemini, DeepSeek, local-model, or other non-Codex provider connection is currently configured.

The large OmniRoute model catalog contains route definitions for many providers, but those catalog entries do not mean the corresponding provider accounts are connected or usable.

## Configured routing combination

One custom combo exists:

### `daily-work`

- Strategy: `priority`
- Primary: `cx/gpt-6-sol`
- Fallback: `cx/gpt-6-luna`
- Computed context length: 872,000 tokens
- Global active combo: none

The combo can still be selected explicitly with `--model daily-work`. Because no combo is globally active, commands that omit the model are not guaranteed to use `daily-work`.

## Relevant available Codex models

- `cx/gpt-6-sol` and reasoning variants
- `cx/gpt-6-luna` and reasoning variants
- `cx/codex-auto-review`
- GPT-6 Astra variants are present in the provider catalog but excluded from this project by user decision

The audit did not find a `gpt-6-terra` entry under the active Codex provider search.

## Compression and usage

- Main compression mode: off
- MCP-description compression: enabled
- Estimated MCP-description tokens saved: 6,960
- Cache hit rate: 0%
- Provider quota information: unavailable through the current CLI response
- Recorded cost was minimal and associated primarily with OpenAI Codex

Compression was not enabled or changed during this audit.

## Non-blocking warnings

- A second `.env` file exists inside the installed OmniRoute package. Values duplicated there are ignored because the user-level `.omniroute/.env` takes precedence. Package updates may replace the package-level file.
- CLI machine-ID resolution reported that CLI-token authentication is disabled. Local provider listing, validation, health, models, and combo inspection still worked.
- The update checker could not access its local update-config store. This did not affect routing health or provider validation.

## Conclusion

The current OmniRoute setup is healthy but **not multi-provider**. It routes between two GPT-family models through the same Codex OAuth provider. It improves task routing and fallback behavior, but it does not diversify usage away from the Codex/OpenAI account.

## Approved project routing under the current setup

- Main planning and implementation: `daily-work`
- Mechanical or contained work: `cx/gpt-6-luna`
- Independent review: `cx/codex-auto-review` or a fresh `cx/gpt-6-sol` context
- GPT-6 Astra: excluded

If the goal is true provider diversification, at least one non-Codex provider must be connected and a new routing combo must be designed and tested. That would be a separate configuration change requiring explicit approval and provider credentials or OAuth authorization.
