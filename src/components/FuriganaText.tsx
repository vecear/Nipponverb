import React from 'react';

interface FuriganaTextProps {
    text: string;
    className?: string;
}

/**
 * Renders text with Furigana using the syntax: 漢字{かんじ}
 */
const FuriganaText: React.FC<FuriganaTextProps> = ({ text, className = "" }) => {
    if (!text) return null;

    // Regex to match: Kanji{Furigana}
    // This matches only CJK characters (kanji) followed by {reading}
    // CJK Unified Ideographs range: \u4e00-\u9fff
    // CJK Extension A: \u3400-\u4dbf
    // Include iteration mark (々) and common small kana marks used in words
    const regex = /([\u4e00-\u9fff\u3400-\u4dbf\u3005\u3007\u30f5\u30f6]+)\{([^{}]+)\}/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    // Check for raw HTML ruby tags
    if (text.includes('<ruby>')) {
        return (
            <span
                className={className}
                dangerouslySetInnerHTML={{ __html: text }}
            />
        );
    }

    while ((match = regex.exec(text)) !== null) {
        // Add text before the match
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }

        // Add the ruby element
        parts.push(
            <ruby key={match.index}>
                {match[1]}
                <rt className="text-[0.6em] text-vermilion/80 select-none">{match[2]}</rt>
            </ruby>
        );

        lastIndex = regex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return <span className={className}>{parts}</span>;
};

export default FuriganaText;
