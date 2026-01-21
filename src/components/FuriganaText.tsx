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

    // Regex to match: Text{Furigana}
    // This matches sequences like 漢字{かんじ}
    const regex = /([^{}\s]+)\{([^{}]+)\}/g;
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
                <rt className="text-[0.6em] text-sakura-pink/80 select-none">{match[2]}</rt>
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
