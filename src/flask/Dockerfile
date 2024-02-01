
FROM --platform=$BUILDPLATFORM python:3-slim

WORKDIR /app

COPY requirements.txt /app
RUN --mount=type=cache,target=/root/.cache/pip \
    pip3 install -r requirements.txt

COPY app.py /app

EXPOSE 8000

ENTRYPOINT ["python3"]
CMD ["app.py"]

