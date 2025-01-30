from sqlalchemy import Column, String, Text, DateTime
import uuid
from app import db
from datetime import datetime


class Snippet(db.Model):
    __tablename__ = "snippet"

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

    def to_json(self):
        return {
            "id": self.id,
            "code": self.code,
            "language": self.language,
            "theme": self.theme,
            "created_at": self.created_at.isoformat() if isinstance(self.created_at, datetime) else self.created_at,
        }
