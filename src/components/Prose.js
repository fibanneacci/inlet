import React from 'react'
import { schema } from "prosemirror-schema-basic"
import { EditorState } from "prosemirror-state"
import { EditorView } from "prosemirror-view"
import { HtmlEditor } from "@aeaton/react-prosemirror"
import { options } from "@aeaton/react-prosemirror-config-default"

// From @aeaton/react-prosemirror docs: https://www.npmjs.com/package/@aeaton/react-prosemirror

const Prose = (props) => {
    function onChange() {
        // Do something
    }

    return (
        <HtmlEditor options={options} value={""} onChange={onChange}></HtmlEditor>
    );
}

export default Prose;
