# yatte (やって)

"yatte" はShellScriptで開発されたシンプルなタスクランナーです。

English README: [README_en.md](./docs/README_en.md)

## インストール

以下のコマンドでインストールできます。

```sh
curl -fsSL https://yatte.net/install | sh
```

## 使い方

1. プロジェクトのルートディレクトリに`yatte.yml`というファイルを作成します。
2. `yatte.yml`にタスクを記述します。
3. `yatte <task-name>`でタスクを実行します。

### タスクの書き方

`yatte` はシンプルなyamlライクのファイルを解析してタスクを実行できます。  
以下のような書き方ができます。

```yaml
# yatte.yml
task-name: "echo 'hello world'"
multiline-task: |
  echo 'hello'
  echo 'world'
```

### ヘルプ

`yatte --help`でヘルプを表示できます。

### アップデート

`yatte --update-yatte`でアップデートできます。

## 詳細

- `yatte` は、Git管理化にあるディレクトリ内で実行された場合、Gitリポジトリのルートディレクトリに移動してタスクを実行します。
  - タスクが実行されるディレクトリを現在のディレクトリとする場合は、`yatte --here <task-name>`とします。
