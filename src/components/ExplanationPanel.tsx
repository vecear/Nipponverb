import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import FuriganaText from './FuriganaText'
import type { StructuredExplanation } from '../data/questions/types'

interface DistractorExplanation {
  text: string
  reason: string
}

interface DetailedExplanation {
  correctRule: string
  distractors: DistractorExplanation[]
  structured?: StructuredExplanation
}

interface ExplanationPanelProps {
  explanation: DetailedExplanation
  meaning?: string
  correct?: string
  selectedAnswer: string | null
  defaultOpen?: boolean
}

/** Render structured explanation with sectioned UI */
const StructuredView = ({ structured }: { structured: StructuredExplanation }) => (
  <div className="space-y-2">
    {/* 考點 */}
    <div className="bg-blue-50 p-2 rounded-md border-l-3 border-blue-400">
      <p className="font-bold text-blue-700 mb-0.5 text-sm">🎯 考點</p>
      <p className="text-gray-800 text-sm">
        <FuriganaText text={structured.keyPoint} />
      </p>
    </div>

    {/* 解析 */}
    <div className="bg-green-50 p-2 rounded-md border-l-3 border-green-400">
      <p className="font-bold text-green-700 mb-0.5 text-sm">📖 解析</p>
      <p className="text-gray-800 whitespace-pre-line text-sm">
        <FuriganaText text={structured.analysis} />
      </p>
    </div>

    {/* 相關比較 */}
    {structured.comparisons && structured.comparisons.length > 0 && (
      <div className="bg-purple-50 p-2 rounded-md border-l-3 border-purple-400">
        <p className="font-bold text-purple-700 mb-0.5 text-sm">🔄 相關比較</p>
        <ul className="space-y-0.5">
          {structured.comparisons.map((item, idx) => (
            <li key={idx} className="text-gray-800 text-sm flex items-start gap-1">
              <span className="text-purple-400 shrink-0">・</span>
              <FuriganaText text={item} />
            </li>
          ))}
        </ul>
      </div>
    )}

    {/* 易錯點 */}
    {structured.commonMistakes && structured.commonMistakes.length > 0 && (
      <div className="bg-red-50 p-2 rounded-md border-l-3 border-red-400">
        <p className="font-bold text-red-700 mb-0.5 text-sm">⚠️ 易錯點</p>
        <ul className="space-y-0.5">
          {structured.commonMistakes.map((item, idx) => (
            <li key={idx} className="text-gray-800 text-sm">
              <FuriganaText text={item} />
            </li>
          ))}
        </ul>
      </div>
    )}

    {/* 陷阱說明 */}
    {structured.trapNote && (
      <div className="bg-amber-50 p-2 rounded-md border-l-3 border-amber-400">
        <p className="font-bold text-amber-700 mb-0.5 text-sm">🪤 陷阱說明</p>
        <p className="text-gray-800 text-sm">
          <FuriganaText text={structured.trapNote} />
        </p>
      </div>
    )}

    {/* 相關規則 */}
    {structured.relatedRules && structured.relatedRules.length > 0 && (
      <div className="bg-gray-100 p-2 rounded-md border-l-3 border-gray-400">
        <p className="font-bold text-gray-700 mb-0.5 text-sm">📚 相關規則</p>
        <ul className="space-y-0.5">
          {structured.relatedRules.map((rule, idx) => (
            <li key={idx} className="text-gray-700 text-sm flex items-start gap-1">
              <span className="text-gray-400 shrink-0">•</span>
              <FuriganaText text={rule} />
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
)

/** Fallback: render correctRule as plain text (old format) */
const PlainTextView = ({ correctRule }: { correctRule: string }) => (
  <div className="bg-gray-200/80 p-2 rounded-md border-l-3 border-wave-light">
    <p className="font-bold text-wave-deep mb-0.5 text-sm">📖 文法解析</p>
    <p className="text-gray-800 whitespace-pre-line text-sm">
      <FuriganaText text={correctRule} />
    </p>
  </div>
)

const ExplanationPanel = ({
  explanation,
  meaning,
  correct,
  selectedAnswer,
  defaultOpen = false,
}: ExplanationPanelProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="space-y-2">
      {/* 翻譯/語意 */}
      {meaning && (
        <p className="text-gray-800 text-sm pb-1.5 border-b border-gray-300">
          {meaning.split(/(\*.*?\*)/).map((part, index) =>
            part.startsWith('*') && part.endsWith('*') ? (
              <span key={index} className="italic text-vermilion/90 font-medium">
                {part.slice(1, -1)}
              </span>
            ) : (
              part
            )
          )}
        </p>
      )}

      {/* 展開/收合按鈕 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-sm text-wave-deep hover:text-vermilion transition-colors font-medium w-full text-left"
      >
        <span>📖 詳細解析</span>
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {/* 可展開的解析內容 */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.06, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="space-y-2">
              {/* 結構化渲染 or 純文字 fallback */}
              {explanation.structured
                ? <StructuredView structured={explanation.structured} />
                : <PlainTextView correctRule={explanation.correctRule} />
              }

              {/* 各選項解析 */}
              <div className="bg-gray-200/80 p-2 rounded-md space-y-1.5">
                <p className="font-bold text-gray-800 mb-1 text-sm">📝 各選項解析</p>
                {explanation.distractors.map((distractor, idx) => {
                  const isCorrectOption = distractor.text === correct
                  const isSelectedOption = distractor.text === selectedAnswer

                  return (
                    <div
                      key={idx}
                      className={`p-1.5 rounded-md ${
                        isCorrectOption
                          ? 'bg-green-500/20 border border-green-500/50'
                          : isSelectedOption
                          ? 'bg-red-500/20 border border-red-500/50'
                          : 'bg-gray-100 border border-gray-300'
                      }`}
                    >
                      <div className="flex items-start gap-1.5">
                        <span className={`font-bold shrink-0 text-sm ${
                          isCorrectOption ? 'text-green-600' : isSelectedOption ? 'text-red-600' : 'text-gray-600'
                        }`}>
                          {isCorrectOption ? '✓' : isSelectedOption ? '✗' : '•'}
                        </span>
                        <div className="flex-1 min-w-0">
                          <span className={`font-medium text-sm ${
                            isCorrectOption ? 'text-green-700' : isSelectedOption ? 'text-red-700' : 'text-gray-800'
                          }`}>
                            <FuriganaText text={distractor.text} />
                          </span>
                          {isCorrectOption && <span className="ml-1 text-xs text-green-600">(正解)</span>}
                          {isSelectedOption && !isCorrectOption && <span className="ml-1 text-xs text-red-600">(你的選擇)</span>}
                          <p className="text-gray-700 text-xs mt-0.5">
                            <FuriganaText text={distractor.reason} />
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ExplanationPanel
