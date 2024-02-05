import React, { useState } from "react";
import Select from "react-select";

const DisplayCSV = ({ data }) => {
  console.log('data from the displayCSV component', data);

  const columnHeadings = Object.keys(data[0] || {});
  const [selectedTagsPerRow, setSelectedTagsPerRow] = useState({});

  const handleTagSelect = (rowIndex, tag) => {
    console.log(`rowIndex: ${rowIndex}`);
    console.log(`tag:${tag.value}`)
    console.log(`selectedTagsPerRow[rowIndex]: ${selectedTagsPerRow[rowIndex]}`)
    const tagsArray = selectedTagsPerRow[rowIndex] || [];
    tagsArray.push(tag.value)
    setSelectedTagsPerRow({
        ...selectedTagsPerRow,
        [rowIndex]: tagsArray,
    })
    console.log('selectedTags: ', tagsArray);
  }

  console.log('selectedTagsPerRow: ', selectedTagsPerRow);

  const handleRemoveTag = (rowIndex, tagIndex) => {
    console.log('outer_index: ', rowIndex);
    console.log('e.target: ', tagIndex);
    console.log('deleting tag is: ', tagIndex.value);
    const tagsArray = selectedTagsPerRow[rowIndex] || [];
    tagsArray.splice(tagIndex, 1);
    setSelectedTagsPerRow({
      ...selectedTagsPerRow,
      [rowIndex]: tagsArray,
    });
  }

  return (
    <div className="csv-file-data-display-inner">
      <h3 className="file-data-section-title">Uploads</h3>
      <div className="data-table-outer">
      <table className="file-data-section-table">
        <thead>
          <tr className="table-headings-row">
            {columnHeadings.map((heading) => (
              <th key={heading} className={`th-${heading.replace(/\s+/g, '-')}`}>
                {heading.toLowerCase() === "id" ? (
                    "SI No."
                  ) : (heading)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, outer_index) => (
            <tr key={outer_index} className="table-data-rows" id={`row-${outer_index}`}>
              {columnHeadings.map((heading, index) => (
                <td key={heading} id={`cell-${outer_index}-${index}`} className={`td-${heading.replace(/\s+/g, '-')}`}>
                  {heading.toLowerCase() === "links" ? (
                    <a href={`https://${item[heading]}`} target="_blank" rel="noopener">
                      {item[heading]}
                    </a>
                  ) : heading.toLowerCase() === "select tags" ? (
                    <label htmlFor={`select-tags-${outer_index}`}>
                      <Select
                        className="areas-select-tag"
                        classNamePrefix="areas-select-tag"
                        id={`select-tags-${outer_index}`}
                        options={item[heading].split(',').map((tag, i) => ({ value: tag, label: tag }))}
                        onChange={(selectedOption) => handleTagSelect(outer_index, selectedOption)}
                        placeholder="Select Tags"
                      />
                    </label>
                  ) : (
                    heading.toLowerCase() === "selected tags" ? (
                      selectedTagsPerRow[outer_index] ? (
                        selectedTagsPerRow[outer_index].map((tag, i) => <span className="each-selected-tag" key={i}>{tag}<button className="selected-tag-delete-button" type="button" onClick={(e) => handleRemoveTag(outer_index, i)}>&#x00D7;</button></span>
                        )
                      ) : null
                    ) : (
                      item[heading]
                    )
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default DisplayCSV;
