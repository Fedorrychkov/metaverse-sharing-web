import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Chip, FormControlLabel, makeStyles, Switch, Typography } from '@material-ui/core'
import { IStore } from '~/store/types'
import { setFilter } from '~/store/domains'

export const Filter = () => {
  const { filter: { types, isAvailable }, filteredDomains } = useSelector((state: IStore) => state.domains)
  const dispatch = useDispatch()
  const styles = useStyles()
  const filteredLength = useMemo(() => filteredDomains.length, [filteredDomains])

  const handleTypeSelect = useCallback((selectedType) => {
    const selectedTypes = types.map((type) =>
      selectedType === type.type ? ({ ...type, selected: !type.selected }) : type)

    dispatch(setFilter({ types: selectedTypes, isAvailable }))
  }, [types, isAvailable, dispatch])

  const onClear = useCallback(() => {
    const all = types.map(type => ({ ...type, selected: false }))

    dispatch(setFilter({ types: all, isAvailable }))
  }, [types, isAvailable, dispatch])

  const handleChangeAvailability = useCallback(() => {
    dispatch(setFilter({ types, isAvailable: !isAvailable }))
  }, [types, isAvailable, dispatch])

  return (
    <Box component="aside" display="flex" flexDirection="column" className={styles.container}>
      <Box className={styles.innerContainer}>
        <Box px={2} pt={2} pb={1} display="flex" justifyContent="space-between" alignItems="center">
          <Typography component="label" color="textPrimary">Filters ({filteredLength})</Typography>
          <Button className={styles.clear} onClick={onClear}>Clear</Button>
        </Box>
        <Box>
          {types.map(({ type, title, selected }: any) => (
            <Chip key={type} label={title} onClick={() => handleTypeSelect(type)} className={`${styles.chip} ${selected && styles.activeChip}`} clickable variant="outlined" />
          ))}
        </Box>
        <Box px={2} pt={2} pb={2} color="primary">
          <FormControlLabel
            className={styles.formControl}
            control={
              <Switch
                checked={isAvailable}
                className={styles.switch}
                onChange={handleChangeAvailability}
                name="available.main"
              />
            }
            label="Available only"
          />
        </Box>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles({
  container: {
    border: '1px solid #fff',
    padding: 2,
  },
  formControl: {
    color: '#fdff88',
    textTransform: 'uppercase',
  },
  switch: {
    '.MuiSwitch-thumb': {
      backgroundColor: 'transparent',
      border: '1px solid #fdff88',
    },
  },
  innerContainer: {
    border: '2px solid #fff',
  },
  clear: {
    padding: 0,
    textTransform: 'none',
    fontWeight: 400,
    fontSize: 12,
  },
  chip: {
    margin: 8,
    color: '#fdff88',
    borderColor: '#fdff88',
    borderWidth: 2,
    fontSize: 14,
    fontWeight: 500,
    padding: '12px 8px',
  },
  activeChip: {
    color: '#2a282e',
    backgroundColor: '#fdff88 !important',
  },
})
