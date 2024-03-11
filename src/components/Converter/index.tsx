import { ChangeEventHandler, useState } from 'react';
import hexRgb from '../../utils/hexRgb';
import ConverterInput from '../ConverterInput';
import './index.css';

interface covnProps {
    hex: string;
    rgb: string;
    bodyColor: string;
}

function Converter() {
    const [conv, setConv] = useState<covnProps>({
        hex: '',
        rgb: 'rgb(red, green, blue)',
        bodyColor: '',
    });

    const handleInput: ChangeEventHandler<HTMLInputElement> = (evt) => {
        const hexValue = evt.target.value;
        setConv((prev) => ({
            ...prev,
            hex: hexValue,
            rgb: 'rgb(red, green, blue)',
            bodyColor: '',
        }));
        let hexRes = hexRgb(hexValue);
        let color = '';
        let rgb = 'rgb(red, green, blue)'
        if (!hexRes) {
            color = 'rgb(231, 76, 60)';
            rgb = 'Ошибка!';
        } else if (typeof hexRes === 'string') {
            color = hexRes;
            rgb = hexRes;
        } else {
            color = ''
            hexRes = 'rgb(red, green, blue)';
        }
         
        setConv((prev) => ({
            ...prev,
            rgb: rgb,
            bodyColor: color,
        }));
    };

    return (
        <>
            <div
                className="converter"
                style={{ backgroundColor: conv.bodyColor }}
            >
                <div className="fields">
                    <ConverterInput hex={conv.hex} handleInput={handleInput} />
                    <p className="result">{conv.rgb}</p>
                </div>
            </div>
        </>
    );
}

export default Converter;
