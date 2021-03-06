import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import MaterialTypography from '@material-ui/core/Typography'
import MateriaSlider from '@material-ui/core/Slider'

export const OpacityTitle = withStyles(() => ({
  root: {
    fontSize: '12px',
    paddingTop: '0.3rem',
    color: '#868686'
  }
}))(MaterialTypography)

export const Slider = withStyles(() => ({
  root: {
    padding: '0'
  }
}))(MateriaSlider)

export const OpacityWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`
