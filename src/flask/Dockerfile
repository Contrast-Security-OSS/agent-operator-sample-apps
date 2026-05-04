
FROM --platform=$BUILDPLATFORM python:3-slim@sha256:5b3879b6f3cb77e712644d50262d05a7c146b7312d784a18eff7ff5462e77033

WORKDIR /app

COPY requirements.txt /app
RUN --mount=type=cache,target=/root/.cache/pip \
    pip3 install -r requirements.txt

COPY app.py /app

EXPOSE 8000

ENTRYPOINT ["python3"]
CMD ["app.py"]

