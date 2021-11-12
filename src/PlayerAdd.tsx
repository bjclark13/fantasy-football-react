import IPlayer from "./IPlayer";

function PlayerAdd({ onAdd }: { onAdd: (player: IPlayer) => void }) {
    return (
        <form className="player">
            <p>
                <label>
                    <strong> Name </strong>
                    <input name="name" />
                </label>
            </p>

            <p>
                <label>
                    <strong> Position </strong>
                    <input name="position" />
                </label>
            </p>

            <p>
                <label>
                    <strong> Start Player Upon Adding? </strong>
                    <input name="starting" type="checkbox" />
                </label>
            </p>

            <p>
                <button> Submit </button>
            </p>

        </form>
    )
};

export default PlayerAdd;