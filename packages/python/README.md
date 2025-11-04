# withoutbg - Python SDK

AI-powered background removal with local and cloud options.

[![PyPI](https://img.shields.io/pypi/v/withoutbg.svg)](https://pypi.org/project/withoutbg/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Installation

```bash
pip install withoutbg
```

## Quick Start

```python
from withoutbg import remove_background

# Remove background (local processing)
result = remove_background("input.jpg")
result.save("output.png")

# Use cloud API for best quality
result = remove_background("input.jpg", api_key="sk_your_key")
result.save("output.png")
```

## CLI Usage

```bash
# Process single image
withoutbg photo.jpg

# Batch processing
withoutbg photos/ --batch --output-dir results/

# Use cloud API
withoutbg photo.jpg --api-key sk_your_key
```

## Features

- ✨ Local processing with Focus v1.0.0 model (free)
- 🚀 Cloud API for best quality results
- 📦 Batch processing support
- 🎯 Python API and CLI
- 🔧 Flexible output formats (PNG, JPEG, WebP)

## Documentation

For complete documentation, see the [main project README](../../README.md).

## Development

```bash
# Install in development mode
pip install -e ".[dev]"

# Run tests
pytest

# Type checking
mypy src/

# Format code
black src/ tests/
ruff check src/ tests/
```

## License

Apache License 2.0 - see [LICENSE](../../LICENSE)






