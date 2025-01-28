from sqlalchemy import Column, String, Text, DateTime
import uuid
from api import db
from datetime import datetime


class Snippet(db.Model):
    __tablename__ = "snippet"

    # UUID almacenado como String
    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    code = Column(Text, nullable=False)
    language = Column(String(50), nullable=False, default="plaintext")
    theme = Column(String(50), nullable=False, default="light")
    created_at = Column(DateTime, default=datetime.utcnow)

    def __init__(self, code, language, theme):
        self.code = code
        self.language = language
        self.theme = theme

    def __repr__(self):
        return f"<Snippet {self.id}>"
