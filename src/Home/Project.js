import React from 'react'
import styled from 'styled-components'
import { capitalize } from 'lodash'
import Octicon from 'react-component-octicons'
import { EntypoTwitter } from 'react-entypo'
import Card from './Card'
import OpenSourceStat from './OpenSourceStat'
import DataPoint from './DataPoint'

const TwitterIcon = styled(({ className }) =>
  <EntypoTwitter className={className}/>
)`
  width: 16px !important;
  height: 16px !important;
`

const Project = ({
  title,
  repo,
  homepage,
  starterTemplateRepo,
  stars,
  forks,
  issues,
  followers,
  starsPrevious = 0,
  forksPrevious = 0,
  issuesPrevious = 0,
  followersPrevious = 0,
  description,
  slug,
  dataAgeInDays,
  className,
  fields,
  fieldValues,
}) =>
  <Card
    url={`/${slug}`}
    title={title}
    description={description}
    starterTemplateRepo={starterTemplateRepo}
    fields={fields}
    fieldValues={fieldValues}
    Stats={() => [
      <OpenSourceStat
        key="stars"
        Icon={() => <Octicon name="star" zoom="100%"/>}
        label="GitHub stars"
        value={stars}
        change={stars - starsPrevious}
        indicateColor={true}
        dataAgeInDays={dataAgeInDays}
      />,
      <OpenSourceStat
        key="issues"
        Icon={() => <Octicon name="issue-opened" zoom="100%"/>}
        label="GitHub open issues"
        value={issues}
        change={issues - issuesPrevious}
        dataAgeInDays={dataAgeInDays}
      />,
      <OpenSourceStat
        key="forks"
        Icon={() => <Octicon name="repo-forked" zoom="100%"/>}
        label="GitHub forks"
        value={forks}
        change={forks - forksPrevious}
        indicateColor={true}
        dataAgeInDays={dataAgeInDays}
      />,
      <OpenSourceStat
        key="followers"
        Icon={() => <TwitterIcon/>}
        label="Twitter followers"
        value={followers}
        change={followers - followersPrevious}
        indicateColor={true}
        dataAgeInDays={dataAgeInDays}
      />,
    ]}
  />

export default Project
