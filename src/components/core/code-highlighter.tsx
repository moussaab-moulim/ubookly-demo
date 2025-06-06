import type * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const codeStyle: Record<string, React.CSSProperties> = {
  'code[class*="language-"]': {
    color: 'var(--mui-palette-neutral-50)',
    background: 'none',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily: "'Roboto Mono', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: 'var(--fontSize-sm)',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: 1.5,
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: 'var(--mui-palette-neutral-50)',
    background: 'var(--mui-palette-neutral-800)',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily: "'Roboto Mono', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: 'var(--fontSize-sm)',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: 1.5,
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    padding: '1em',
    margin: '.5em 0',
    overflow: 'auto',
    borderRadius: '8px',
  },
  ':not(pre) > code[class*="language-"]': {
    background: 'var(--mui-palette-neutral-800)',
    padding: '.1em',
    borderRadius: '.3em',
    whiteSpace: 'normal',
  },
  comment: { color: '#6272a4' },
  prolog: { color: '#6272a4' },
  doctype: { color: '#6272a4' },
  cdata: { color: '#6272a4' },
  punctuation: { color: '#f8f8f2' },
  '.namespace': { opacity: '.7' },
  property: { color: '#ff79c6' },
  tag: { color: '#ff79c6' },
  constant: { color: '#ff79c6' },
  symbol: { color: '#ff79c6' },
  deleted: { color: '#ff79c6' },
  boolean: { color: '#bd93f9' },
  number: { color: '#bd93f9' },
  selector: { color: '#50fa7b' },
  'attr-name': { color: '#50fa7b' },
  string: { color: '#50fa7b' },
  char: { color: '#50fa7b' },
  builtin: { color: '#50fa7b' },
  inserted: { color: '#50fa7b' },
  operator: { color: '#f8f8f2' },
  entity: { color: '#f8f8f2', cursor: 'help' },
  url: { color: '#f8f8f2' },
  '.language-css .token.string': { color: '#f8f8f2' },
  '.style .token.string': { color: '#f8f8f2' },
  variable: { color: '#f8f8f2' },
  atrule: { color: '#f1fa8c' },
  'attr-value': { color: '#f1fa8c' },
  function: { color: '#f1fa8c' },
  'class-name': { color: '#f1fa8c' },
  keyword: { color: '#8be9fd' },
  regex: { color: '#ffb86c' },
  important: { color: '#ffb86c', fontWeight: 'bold' },
  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
};

export interface CodeHighlighterProps {
  children: React.ReactNode;
  className?: string;
  inline?: boolean;
}

export function CodeHighlighter({ children, className, inline, ...props }: CodeHighlighterProps): React.JSX.Element {
  const language = (className ?? '').split('language-')[1];
  const canHighlight = !inline && Boolean(language);

  return canHighlight ? (
    <SyntaxHighlighter PreTag="div" language={language} style={codeStyle} {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
}
