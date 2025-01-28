from flask import Blueprint, request, jsonify
from api.models import Snippet
from api import db
import uuid

main = Blueprint("main", __name__)


@main.route("/snippets", methods=["POST"])
def create_snippet():
    data = request.get_json()
    new_snippet = Snippet(
        code=data.get("code", ""),
        language=data.get("language", "plaintext"),
        theme=data.get("theme", "light"),
    )
    db.session.add(new_snippet)
    db.session.commit()
    return jsonify({"id": new_snippet.id}), 201


@main.route("/snippets/<uuid:snippet_id>", methods=["GET"])
def get_snippet(snippet_id: uuid.UUID):
    print(snippet_id)
    snippet = Snippet.query.get_or_404(str(snippet_id))  # Convertir a cadena

    return jsonify(
        {
            "id": snippet.id,
            "code": snippet.code,
            "language": snippet.language,
            "theme": snippet.theme,
            "created_at": snippet.created_at.isoformat(),
        }
    )


@main.route("/snippets/<uuid:snippet_id>", methods=["PUT"])
def update_snippet(snippet_id: uuid.UUID):
    snippet = Snippet.query.get_or_404(str(snippet_id))
    data = request.get_json()
    snippet.code = data.get("code", snippet.code)
    snippet.language = data.get("language", snippet.language)
    snippet.theme = data.get("theme", snippet.theme)
    db.session.commit()
    return jsonify({"message": "Snippet updated successfully"})


@main.route("/snippets/<uuid:snippet_id>", methods=["DELETE"])
def delete_snippet(snippet_id: uuid.UUID):
    snippet = Snippet.query.get_or_404(str(snippet_id))
    db.session.delete(snippet)
    db.session.commit()
    return jsonify({"message": "Snippet deleted successfully"})
