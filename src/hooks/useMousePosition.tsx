import { useState , useEffect} from 'react'


const useMousePosition = ()=>{
    const [positions, setPositions] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const updataMouse = (e: MouseEvent) => {
            setPositions({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener('mousemove', updataMouse)
        return () => {
            console.log('remove effect')
            document.removeEventListener('mousemove', updataMouse)
        }
    },[])
    return positions
}
export default useMousePosition