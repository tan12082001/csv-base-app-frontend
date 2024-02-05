import React, { useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const DisplayCSV = ({ data }) => {
  const columnHeadings = Object.keys(data[0] || {});
  const [selectedTagsPerRow, setSelectedTagsPerRow] = useState({});

  const handleTagSelect = (rowIndex, tag) => {
    const tagsArray = selectedTagsPerRow[rowIndex] || [];
    if (!tagsArray.includes(tag.value)) {
      tagsArray.push(tag.value);
    }

    setSelectedTagsPerRow({
      ...selectedTagsPerRow,
      [rowIndex]: tagsArray,
    });
  };

  const handleRemoveTag = (rowIndex, tagIndex) => {
    const tagsArray = selectedTagsPerRow[rowIndex] || [];
    tagsArray.splice(tagIndex, 1);
    setSelectedTagsPerRow({
      ...selectedTagsPerRow,
      [rowIndex]: tagsArray,
    });
  };

  return (
    <div className="csv-file-data-display-inner">
      <h3 className="file-data-section-title">Uploads</h3>
      <div className="data-table-outer">
        <table className="file-data-section-table">
          <thead>
            <tr className="table-headings-row">
              {columnHeadings.map((heading) => (
                <th
                  key={heading}
                  className={`th-${heading.replace(/\s+/g, '-')}`}
                >
                  {heading.toLowerCase() === 'id' ? 'SI No.' : heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, outerIndex) => {
              const trKey = item.id || outerIndex;
              return (
                <tr
                  key={trKey}
                  className="table-data-rows"
                  id={`row-${outerIndex}`}
                >
                  {columnHeadings.map((heading, index) => {
                    const tdKey = `cell-${outerIndex}-${index}`;
                    if (heading.toLowerCase() === 'links') {
                      return (
                        <td
                          key={uuidv4()}
                          id={tdKey}
                          className={`td-${heading.replace(/\s+/g, '-')}`}
                        >
                          <a
                            href={`https://${item[heading]}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item[heading]}
                          </a>
                        </td>
                      );
                    }
                    if (heading.toLowerCase() === 'select tags') {
                      return (
                        <td
                          key={uuidv4()}
                          id={tdKey}
                          className={`td-${heading.replace(/\s+/g, '-')}`}
                        >
                          <Select
                            className="areas-select-tag"
                            classNamePrefix="areas-select-tag"
                            id={`select-tags-${outerIndex}`}
                            options={item[heading]
                              .split(',')
                              .map((tag) => ({ value: tag, label: tag }))}
                            onChange={
                              (selectedOption) => handleTagSelect(outerIndex, selectedOption)
                            }
                            placeholder="Select Tags"
                            aria-label="Select Tags"
                          />
                        </td>
                      );
                    }
                    if (heading.toLowerCase() === 'selected tags') {
                      return (
                        <td
                          key={uuidv4()}
                          id={tdKey}
                          className={`td-${heading.replace(/\s+/g, '-')}`}
                        >
                          {selectedTagsPerRow[outerIndex]
                            ? selectedTagsPerRow[outerIndex].map((tag, i) => (
                              <span
                                key={uuidv4()}
                                className="each-selected-tag"
                              >
                                {tag}
                                <button
                                  className="selected-tag-delete-button"
                                  type="button"
                                  onClick={() => handleRemoveTag(outerIndex, i)}
                                >
                                  &#x00D7;
                                </button>
                              </span>
                            ))
                            : null}
                        </td>
                      );
                    }
                    return (
                      <td
                        key={uuidv4()}
                        id={tdKey}
                        className={`td-${heading.replace(/\s+/g, '-')}`}
                      >
                        {item[heading]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

DisplayCSV.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      link: PropTypes.string,
      prefix: PropTypes.string,
    }),
  ).isRequired,
};

export default DisplayCSV;
