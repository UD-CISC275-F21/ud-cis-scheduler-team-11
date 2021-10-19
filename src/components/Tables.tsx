import {Table} from 'react-bootstrap'

export function Tables(): JSX.Element{
    return <Table bordered>
        <tbody>
            <tr>
                <td>Semester1</td>
            </tr>
            <tr>
                <td>Semester2</td>
            </tr>
            <tr>
                <td>Name</td>
            </tr>
            <tr>
                <td>Major</td>
            </tr>
            <tr>
                <td>Graduation Year</td>
            </tr>
        </tbody>
    </Table>
}
