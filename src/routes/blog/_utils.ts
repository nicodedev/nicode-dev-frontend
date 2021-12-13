// https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests

export const getTextStats = (text: string): PostMetaType => {
	const words = text.split(/\s+/);
	const sentences = text.split('. ');

	const syllables = words.reduce((acc, word) => {
		const letters = word.split('');
		const vowels = letters.filter((letter) => ['a', 'e', 'i', 'o', 'u'].includes(letter));
		return acc + vowels.length;
	}, 0);

	const wordsPerSentence = words.length / sentences.length;
	const syllablesPerWord = syllables / words.length;
	const readability = Math.round(0.39 * (wordsPerSentence + 100 * syllablesPerWord) - 15.8);

	const wpm = 238; // average reading speed

	const readingTime = Math.ceil(words.length / wpm);

	return { readability, readingTime, wordCount: words.length };
};
