import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "How to calculate a flange according to AD2000?",
        value: "How to calculate a flange according to AD2000?"
    },
    { text: "Please summerize the AD2000 design code.", value: "Please summerize the AD2000 design code." },
    { text: "Show me how to calculate a cylindrical shell according to AD2000.", value: "Show me how to calculate a cylindrical shell according to AD2000." }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
