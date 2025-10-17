# Use Python 3.11 slim image
FROM python:3.11-slim

# Install system libraries needed for Pillow, lxml, pyzbar, etc.
RUN apt-get update && apt-get install -y \
    build-essential \
    libjpeg-dev \
    zlib1g-dev \
    libtiff-dev \
    libfreetype6-dev \
    liblcms2-dev \
    libopenjp2-7-dev \
    libxml2-dev \
    libxslt-dev \
    zbar-tools \
    tcl8.6-dev tk8.6-dev python3-tk \
    && apt-get clean

# Set working directory
WORKDIR /app
COPY . /app

# Upgrade pip and install all Python dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Expose default port for Render
EXPOSE 10000

# Run the Flask app using Gunicorn
CMD ["gunicorn", "app:app", "-b", "0.0.0.0:10000"]
