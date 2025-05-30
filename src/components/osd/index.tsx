import options from 'src/configuration';
import { bind } from 'astal';
import { Astal } from 'astal/gtk3';
import { getOsdMonitor } from './helpers';
import { getPosition } from 'src/lib/window/positioning';
import { OsdRevealer } from './revealer';

const { location } = options.theme.osd;

export default (): JSX.Element => {
    return (
        <window
            monitor={getOsdMonitor()()}
            name={'indicator'}
            namespace={'indicator'}
            className={'indicator'}
            visible={true}
            layer={bind(options.tear).as((tear) => (tear ? Astal.Layer.TOP : Astal.Layer.OVERLAY))}
            anchor={bind(location).as((anchorPoint) => getPosition(anchorPoint))}
            setup={(self) => {
                getOsdMonitor().subscribe(() => {
                    self.set_click_through(true);
                });
            }}
            clickThrough
        >
            <OsdRevealer />
        </window>
    );
};
