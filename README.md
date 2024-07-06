# yatte

"yatte" is a simple task runner

## install

```sh
curl -fsSL https://yatte.net/install | sh
```

## usage

1. create a `yatte.yml` file in your project root directory
2. write your tasks in the `yatte.yml` file
3. run your tasks by running `yatte <task-name>`

## details

- if you run `yatte` in a git project, it will chdir to the git project root directory and run the task.
  - to escape this, you can run `yatte --here <task-name>`
