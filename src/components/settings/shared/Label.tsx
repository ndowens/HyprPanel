import { Binding, execAsync } from 'astal';
import { Gtk } from 'astal/gtk3';

export const Label = ({
    title: name,
    subtitle: sub = '',
    subtitleLink = '',
}: LabelSettingProps): JSX.Element => {
    const Subtitle = (): JSX.Element => {
        if (subtitleLink.length) {
            return (
                <button
                    className="options-sublabel-link"
                    onClick={() => execAsync(`bash -c 'xdg-open ${subtitleLink}'`)}
                    halign={Gtk.Align.START}
                    valign={Gtk.Align.CENTER}
                >
                    <label label={sub} />
                </button>
            );
        }
        return (
            <label
                className="options-sublabel"
                label={sub}
                halign={Gtk.Align.START}
                valign={Gtk.Align.CENTER}
            />
        );
    };

    return (
        <box halign={Gtk.Align.START} vertical>
            <label
                className="options-label"
                label={name}
                halign={Gtk.Align.START}
                valign={Gtk.Align.CENTER}
            />
            <Subtitle />
        </box>
    );
};

export interface LabelSettingProps {
    title: string;
    subtitle?: string | Binding<string>;
    subtitleLink?: string;
}
