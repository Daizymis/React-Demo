

const Demo1 = () => {
const fs = new FileReader();

const code = fs.readAsArrayBuffer('./Promise.ts')
    return (
        <>
            <pre dangerouslySetInnerHTML={{ __html: code }} />
        </>
    )
}
export default Demo1;
