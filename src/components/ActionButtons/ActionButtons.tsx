import {Button} from "../Button/Button";
import {FC} from "react";
import { SVGIcon } from "../SVGIcon/SVGIcon";

interface ActionButtonsProps {
    isBalance: boolean,
}

export const ActionButtons: FC<ActionButtonsProps> = ({ isBalance }) => {

    return (
        <div className="flex space-x-2">
            <Button visible={isBalance} className="bg-blue-600 text-white">
                <SVGIcon isBlue={true} />
                Deposit
            </Button>
            <Button visible={!isBalance} className="bg-blue-600 w-full text-white">
                <SVGIcon isBlue={true} />
                Buy DFC
            </Button>
            <Button visible={isBalance} className="bg-blue-600 bg-opacity-10 text-blue-600">
                <SVGIcon isBlue={false} />
                Send
            </Button>
            <Button visible={isBalance} className={"bg-blue-600 bg-opacity-10 text-blue-600 max-w-20"}>
                <SVGIcon isBlue={false} type="buy" />
                Buy
            </Button>
        </div>
    );
};