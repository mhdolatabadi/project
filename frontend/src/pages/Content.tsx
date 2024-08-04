import { useEffect, useState } from "react"
import { Geography } from "./geography/Geography"
import { Math } from "./math/Math"
import { PromptType } from "../PromptType"
import { Course } from "../Course"
import { Chemistry } from "./chemistry/Chemistry"
import { Science } from "./science/Science"
import { English } from "./english/English"

interface Props {
    sendPrompt: (string: string, promptType: PromptType) => unknown
    selectedCourse: Course
}
export function Content({ sendPrompt, selectedCourse }: Props) {
    const [selectedText, setSelectedText] = useState("")
    const [showButton, setShowButton] = useState(false)
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleSelectionChange = (e: any) => {
            e.stopPropagation()
            const selection = document.getSelection()
            const selectionString = selection?.toString() || ""
            if (selectionString) {
                const range = selection?.getRangeAt(0)
                const clientRects = range?.getBoundingClientRect()
                if (!clientRects)
                    return
                setCoordinates({
                    x: (clientRects.left|| 0),
                    y: (clientRects.bottom + window.scrollY || 0),
                })
                setSelectedText(selectionString)
                setShowButton(true)
            } else {
                setSelectedText("")
                setShowButton(false)
            }
        }
        document.addEventListener('selectionchange', handleSelectionChange)
        return () => {
            document.removeEventListener('selectionchange', handleSelectionChange)
        }
    }, [])

    return <div dir="rtl" style={{ flexGrow: 1, height: '100%', overflowY: 'auto' }}>
        {showButton ?
            <div style={{ position: 'absolute', top: coordinates.y, left: coordinates.x, backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
                <button onClick={() => sendPrompt(selectedText, PromptType.EXPLAIN)}>{PromptType.EXPLAIN}</button>
                <button onClick={() => sendPrompt(selectedText, PromptType.EXAMPLE)}>{PromptType.EXAMPLE}</button>
                <button onClick={() => sendPrompt(selectedText, PromptType.REFERENCE)}>{PromptType.REFERENCE}</button>
                <button onClick={() => sendPrompt(selectedText, PromptType.ABSTRACT)}>{PromptType.ABSTRACT}</button>
                <button onClick={() => sendPrompt(selectedText, PromptType.APPLICATION)}>{PromptType.APPLICATION}</button>
                <button onClick={() => sendPrompt(selectedText, PromptType.QUESTION)}>{PromptType.QUESTION}</button>
            </div> : null}
        {selectedCourse === Course.GEOGRAPHY ? <Geography /> : null }
        {selectedCourse === Course.MATH ? <Math /> : null }
        {selectedCourse === Course.CHEMISTRY ? <Chemistry /> : null }
        {selectedCourse === Course.SCIENCE ? <Science /> : null }
        {selectedCourse === Course.ENGLISH ? <English /> : null }
    </div>
}