# Проект "Вычислитель отличий":
[![Actions Status](https://github.com/PavelKochetkov/frontend-project-46/actions/workflows/test-lint.yml/badge.svg)](https://github.com/PavelKochetkov/frontend-project-46/actions)
[![Actions Status](https://github.com/PavelKochetkov/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/PavelKochetkov/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/ff9eb981390a8278255b/maintainability)](https://codeclimate.com/github/PavelKochetkov/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ff9eb981390a8278255b/test_coverage)](https://codeclimate.com/github/PavelKochetkov/frontend-project-46/test_coverage)

## Описание
__"Вычислитель" отличий__ – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

## Возможности утилиты:
```
Поддержка разных входных форматов: yaml, json
```
```
Генерация отчета в виде plain text, stylish и json. По умолчанию stylish.
```
### Установка

```
git clone https://github.com/PavelKochetkov/frontend-project-46.git
```

```
make install
```
```
make link
```
### Демонстрация работы после установки

```
make demo-stylish
```

```
make demo-plain
```
```
make demo-json
```
### Запуск тестов
```
make test
```
### Запуск ESLint
```
make lint
```

[![asciicast](https://asciinema.org/a/dm2GE4uUQFiWPITH81NeAZUV8.svg)](https://asciinema.org/a/dm2GE4uUQFiWPITH81NeAZUV8)