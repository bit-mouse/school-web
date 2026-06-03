# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

School web application — a fullstack project with **backend** and **frontend** layers. Currently in the bootstrap/planning phase; no application code exists yet. The project uses [Trellis](https://github.com/nicepkg/trellis) for AI-assisted development workflow management.

## Trellis Workflow

This repo is managed by Trellis. The core workflow is:

1. **Create a task** before any implementation work
2. **Plan** (brainstorm requirements → prd.md → curate jsonl context)
3. **Execute** (dispatch `trellis-implement` and `trellis-check` sub-agents)
4. **Finish** (spec update → commit → archive)

Key commands:
```bash
python3 ./.trellis/scripts/task.py create "<title>"        # create task (status→planning)
python3 ./.trellis/scripts/task.py start <task-dir>        # activate (status→in_progress)
python3 ./.trellis/scripts/task.py finish                  # clear active task
python3 ./.trellis/scripts/task.py archive <name>          # archive completed task
python3 ./.trellis/scripts/task.py current --source        # show active task
python3 ./.trellis/scripts/task.py list [--mine]           # list tasks

python3 ./.trellis/scripts/get_context.py --mode packages  # list spec layers
python3 ./.trellis/scripts/get_context.py --mode phase --step 1.1  # step detail
```

### Sub-agent Dispatch Rules

- **Always dispatch sub-agents** for implementation (`trellis-implement`) and quality checks (`trellis-check`) — do not write code in the main thread
- **Research** goes to `trellis-research` sub-agents with output in `{task_dir}/research/`
- Inline override requires explicit user phrases like "do it inline" / "你直接改"

### Spec System

`.trellis/spec/` holds coding guidelines organized by layer:
- `spec/frontend/` — component, hook, state, type, quality guidelines
- `spec/backend/` — database, error handling, logging, quality guidelines
- `spec/guides/` — cross-cutting thinking guides (code reuse, cross-layer)

Sub-agents receive spec context via `implement.jsonl` and `check.jsonl` manifests in each task directory. These must be curated during Phase 1.3 before `task.py start`.

## Architecture

Single-repo mode with two spec layers:

| Layer | Directory | Description |
|-------|-----------|-------------|
| Backend | `spec/backend/` | API, database, services |
| Frontend | `spec/frontend/` | Components, hooks, state management |

Actual source directories will be established during implementation. The spec files in `.trellis/spec/` are currently templates — the bootstrap task (`00-bootstrap-guidelines`) is in progress to populate them with real conventions.

## Hooks

The project uses Claude Code hooks for workflow automation:
- **SessionStart** — injects developer identity, git context, active task info
- **UserPromptSubmit** — injects workflow-state breadcrumb (current phase + required steps)
- **PreToolUse (Agent/Task)** — injects sub-agent context (spec files, prd)

Do not modify hooks without understanding the Trellis runtime contract (see `.trellis/workflow.md`).

## Key Directories

| Path | Purpose |
|------|---------|
| `.trellis/spec/` | Coding guidelines (source of truth for conventions) |
| `.trellis/tasks/` | Active task directories (prd.md, jsonl manifests, research) |
| `.trellis/workspace/` | Per-developer journals and session traces |
| `.trellis/scripts/` | Task lifecycle and context scripts |
| `.trellis/workflow.md` | Full development workflow reference |
