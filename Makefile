deploy:
	npm run build && \
	cd build && \
	git init && \
	git remote add origin git@github.com:xplosunn/deutsch-play.git && \
	git add . && \
	git commit -m "deploy" && \
	git push --force