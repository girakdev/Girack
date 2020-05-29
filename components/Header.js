import Link from 'next/link'
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
      <>
      <Link href="/"><Button color="Primary"> Home</Button></Link>
      <Link href="/articles"><Button color="secondary">Articles</Button></Link>
      <Link href="/info"><Button color="Info">Info</Button></Link>
      </>
  )
}
