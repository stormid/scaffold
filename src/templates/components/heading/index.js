import { h, toChildArray } from 'preact';

const Heading = ({ level = 1, children, className }) => {
    const Tag = `h${level}`;
    return  <Tag class={className}>
            {
                toChildArray(children).length > 1
                    ? <span role="text">{children}</span>
                    : children
                
            }
        </Tag>;
};

export default Heading;