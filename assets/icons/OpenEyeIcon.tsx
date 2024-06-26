import { memo } from "react";
type Props = {
  theme?: string;
};
function OpenEyeIcon() {
  return (
    <svg width="21" height="13" fill="none" viewBox="0 0 21 13"><path fill="#2F3043" fill-opacity=".55" d="M10.461 0C6.464 0 2.84 2.187.164 5.74a.828.828 0 000 .988c2.675 3.557 6.3 5.744 10.297 5.744 3.998 0 7.623-2.187 10.298-5.74a.828.828 0 000-.988C18.084 2.187 14.459 0 10.461 0zm.287 10.627A4.403 4.403 0 016.07 5.95a4.41 4.41 0 014.105-4.104 4.403 4.403 0 014.678 4.678 4.424 4.424 0 01-4.105 4.104zm-.133-2.029A2.366 2.366 0 018.1 6.082a2.38 2.38 0 012.213-2.213 2.366 2.366 0 012.516 2.517 2.38 2.38 0 01-2.213 2.212z" /></svg>
  );
}

export default memo(OpenEyeIcon);
