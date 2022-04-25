import { Container } from "./style"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `# Hello World`

export function Main() {
    return(
        <Container>
            <textarea name="" id="" cols={30} rows={10}></textarea>
            <ReactMarkdown 
                children={markdown}
                remarkPlugins={[remarkGfm]}
            />
        </Container>
    )
}