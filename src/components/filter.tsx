import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Typography } from '@material-ui/core'
import { IStore } from '~/store/types'
import { setDomainsType } from '~/store/domains'

export const Filter = () => {
  const { types } = useSelector((state: IStore) => state.domains.filter)
  const dispatch = useDispatch()

  const handleTypeSelect = useCallback((selectedType) => {
    const selectedTypes = types.map((type) =>
      selectedType === type.type ? ({ ...type, selected: !type.selected }) : type)

    dispatch(setDomainsType(selectedTypes))
  }, [types, dispatch])

  return (
    <Box component="aside" display="flex" flexDirection="column">
      <FormControl component="fieldset">
        <Typography component="label">Type</Typography>
        {types.map(({ type, title, selected }: any) => (
          <FormGroup key={type}>
            <FormControlLabel
              control={<Checkbox checked={selected} onChange={() => handleTypeSelect(type)} name="type" color="primary" />}
              label={title}
            />
          </FormGroup>
        ))}
      </FormControl>
    </Box>
  )
}
