default: build test

build:
	@echo "Building backbone.jacklinks from source..."
	@coffee -c -o ./dist/ ./src/backbone.jacklinks.coffee
	@echo "Done building! The compiled code is in ./dist/"

test:
	@echo 'Running backbone.jacklinks test suite...'
	@jasmine-node --coffee ./spec