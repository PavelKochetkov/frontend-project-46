install:
	npm ci
link:
	npm link
lint:
	npx eslint .
publish:
	npm publish --dry-run
run:
	bin/gendiff.js
test:
	npm run test
test-coverage:
	npm test -- --coverage --coverageProvider=v8
rec-demo:
	asciinema rec demo.cast
rec-upload:
	asciinema upload demo.cast