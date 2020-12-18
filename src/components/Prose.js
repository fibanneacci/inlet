import React from 'react'
import { schema } from "prosemirror-schema-basic"
import { EditorState } from "prosemirror-state"
import { EditorView } from "prosemirror-view"
import { HtmlEditor, MenuBar } from "@aeaton/react-prosemirror"
import { options, menu } from "@aeaton/react-prosemirror-config-default"
import './Prose.css'

// From @aeaton/react-prosemirror docs: https://www.npmjs.com/package/@aeaton/react-prosemirror

const Prose = (props) => {
    function onChange() {
        // Do something
    }

    return (
        <HtmlEditor
            className="prosemirror"
            options={options}
            value={""} onChange={onChange}
            render={({ editor, view}) => (
                <div>
                    <MenuBar menu={menu} view={view} />
                    {editor}
                </div>
            )}
        ></HtmlEditor>
    );
}

export default Prose;
