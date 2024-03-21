install:
	npm ci
lint:
	npx eslint .
publish:
	npm publish --dry-run
test:
	npm run test
run:
	bin/gendiff.js
test-coverage:
	npm test -- --coverage --coverageProvider=v8