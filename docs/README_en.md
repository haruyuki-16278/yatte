# yatte

"yatte" is a simple task runner developed in ShellScript.

## Installation

You can install it with the following command:

```sh
curl -fsSL https://yatte.net/install | sh
```

## Usage

1. Create a file named `yatte.yml` in the root directory of your project.
2. Write tasks in `yatte.yml`.
3. Run tasks with `yatte <task-name>`.

### Writing Tasks

`yatte` can execute tasks by parsing a simple YAML-like file. You can write tasks as follows:

```yaml
# yatte.yml
task-name: "echo 'hello world'"
multiline-task: |
  echo 'hello'
  echo 'world'
```

### Help

You can display help with `yatte --help`.

### Update

You can update with `yatte --update-yatte`.

## Details

- If `yatte` is executed within a directory under Git management, it will move to the root directory of the Git repository and execute the task.
  - If you want to execute the task in the current directory, use `yatte --here <task-name>`.
