import pytest
from model_bakery import baker

@pytest.fixture
def cafe():
    return baker.make("paris_cafe.Cafeteria")