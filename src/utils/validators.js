
export function validatePost({ title, author, content }) {
	if (!title || !title.trim() || !author || !author.trim() || !content || !content.trim()) {
		return 'Title, Author, and Content are required.';
	}
	if (title.trim().length < 3) {
		return 'Title must be at least 3 characters.';
	}
	if (content.trim().length < 10) {
		return 'Content must be at least 10 characters.';
	}
	return '';
}
