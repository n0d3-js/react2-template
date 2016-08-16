BIN   := ./node_modules/.bin
PATH  := $(BIN):$(PATH)

main:
	clear
	@echo [main]
	@echo Project: Template

compile-front:
	@echo [compile-front]
	@$(BIN)/webpack

lint:
	@echo [lint]
	@$(BIN)/eslint client server test -f stylish --color

watch: all
	@echo [watch]
	@$(BIN)/chokidar 'client/**/*.js' -c 'make all'

all: main compile-front lint
