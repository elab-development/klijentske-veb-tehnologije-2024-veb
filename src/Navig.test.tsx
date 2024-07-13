import {render, screen} from '@testing-library/react'
import Navig from './components/Navig'

it('Ucitava nav', ()=>{
    render(<Navig/>)
    const nav = screen.queryByText(/BIBLIOTEKA/i)
    expect(nav).toBeVisible()
})

it('Ucitava kontakt', ()=>{
    render(<Navig/>)
    const nav = screen.queryByText(/Kontakt/i)
    expect(nav).toBeVisible()
})

it('Ucitava knjige', ()=>{
    render(<Navig/>)
    const nav = screen.queryByText(/Knjige/i)
    expect(nav).toBeVisible()
})

