import './index.css';
import { ChangeEventHandler } from 'react';

interface Props {
    hex: string;
    handleInput: ChangeEventHandler<HTMLInputElement>;
}

const ConverterInput = ({ hex, handleInput }: Props) => {
    return (
        <div className="before-input">
            <input
                name="hex"
                className="input"
                type="text"
                value={hex}
                onChange={handleInput}
                placeholder="34495e"
            />
        </div>
    );
}

export default ConverterInput;
