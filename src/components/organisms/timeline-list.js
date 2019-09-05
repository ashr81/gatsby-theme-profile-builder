/** @jsx jsx */
import React from 'react';
import { Styled, jsx, Flex } from "theme-ui"

const TimelineList = ({ timelineEvents }) => {
  return timelineEvents.map(timeline => (
    <Flex key={timeline.id} sx={{
      flexDirection: 'column',
      my: 3,
      py: 0
    }}>
      <Flex sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <Styled.h2>{timeline.name}</Styled.h2>
        <Styled.p>{timeline.startDate} - {timeline.endDate}</Styled.p>
      </Flex>
      <Styled.p sx={{my: 1}}><strong>TechStack: </strong> {timeline.techStack}</Styled.p>
      <Styled.p sx={{my: 1}}>{timeline.description}</Styled.p>
    </Flex>
  ))
}

export default TimelineList;